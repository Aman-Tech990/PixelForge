"use client";

import React, { useEffect } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useUser } from '@clerk/nextjs';
import axios from "axios";

const Provider = ({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) => {

    const { user } = useUser();

    useEffect(() => {
        if (!user?.id) return;
        CreateNewUser();
    }, [user?.id]);

    const CreateNewUser = async () => {
        const result = await axios.post('/api/user', {});
        console.log(result);
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default Provider;