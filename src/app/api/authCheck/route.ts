import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
 
export async function GET() {
  const {userId, session, getToken} = auth();
 
  if (!userId){
    return new Response("Unauthorized", { status: 401 });
  }

  const token = getToken();
  const sessionStatus = session?.status ? session.status : "";
  const authResponse = { userId, token, sessionStatus,  };
 
  return NextResponse.json({ authResponse });
}