import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
 
export async function GET() {
  const {userId} = auth();
 
  if(!userId){
    return new Response("Unauthorized", { status: 401 });
  }
 
  const data = { message: 'Hello' };
 
  return NextResponse.json({ data });
}