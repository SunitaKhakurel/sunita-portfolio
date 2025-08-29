export type Tag =
| 'java' | 'spring' | 'react' | 'typescript' | 'vite' | 'tailwind'
| 'nestjs' | 'prisma' | 'sqlite' | 'postgres' | 'aws' | 'ai' | 'dsa';


export interface Project {
id: string;
slug: string;
title: string;
summary: string;
problem?: string;
solution?: string;
impact?: string;
role?: string;
tech: string; // CSV from backend (e.g., "react,typescript,nestjs")
repoUrl?: string;
liveUrl?: string;
coverImage?: string;
createdAt?: string;
updatedAt?: string;
}