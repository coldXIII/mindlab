import prisma from '@/lib/prisma'
import { ITeacher } from '@/types/teachers'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    await prismaConnect()
    const teachers = await prisma.teacher.findMany()
    return NextResponse.json(teachers, { status: 200 })
  } catch (error) {
    console.log('[GET TEACHERS]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect()
    const data: ITeacher = await request.json()
    const response = await prisma.teacher.create({
      data: {
        name_ua: data.name_ua,
        name_en: data.name_en,
        imageUrl: data.imageUrl,
        imageId: data.imageId,
        speciality: data.speciality,
        about_me: data.about_me,
        about_help: data.about_help,
        about_me_en: data.about_me_en,
        about_help_en: data.about_help_en,
        linkedinLink: data.linkedinLink,
        facebookLink: data.facebookLink,
        telegramLink: data.telegramLink,
        instagramLink: data.instagramLink
      }
    })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
