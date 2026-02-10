import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../config/db";
import { usersTable } from "../../../../config/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {

    const user = await currentUser();

    if (!user || !user.primaryEmailAddress?.emailAddress) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // If already exist
    const users = await db.select().from(usersTable).where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));

    // If doesn't exist
    if (users?.length <= 0) {
        const newUser = {
            name: user?.fullName ?? "",
            email: user?.primaryEmailAddress?.emailAddress,
        }

        const result = await db
            .insert(usersTable)
            .values(newUser)
            .onConflictDoNothing({ target: usersTable.email })
            .returning();

        return NextResponse.json(
            {
                success: true,
                message: "User created Successfully!",
                user: result[0]
            },
            { status: 201 },
        );
    }

    return NextResponse.json(users[0]);
}