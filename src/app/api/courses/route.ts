import prisma from '@/lib/prisma'
import { prismaConnect } from '@/utils/prismaConnect'
import { NextResponse } from 'next/server'
import { ICourse } from '@/types/courses'

export async function GET() {
  try {
    await prismaConnect()
    const courses = await prisma.course.findMany()
    return NextResponse.json(courses, { status: 200 })
  } catch (error) {
    console.log('[GET COURSES]', error)
    return NextResponse.json({ message: 'Cannot fetch' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    await prismaConnect()
    const data: ICourse = await request.json()
    const response = await prisma.course.create({
      data: {
        title: data.title,
        descriptionUa: data.descriptionUa,
        descriptionEn: data.descriptionEn,
        tagsUa: [...data.tagsUa],
        tagsEn: [...data.tagsEn],
        color: data.color,
        courseDescriptionUa1: data.courseDescriptionUa1,
        courseDurationUa: data.courseDurationUa,
        courseDescriptionEn1: data.courseDescriptionEn1,
        courseDurationEn: data.courseDurationEn,
        startDateUa: data.startDateUa,
        startDateEn: data.startDateEn,
        priceUa: data.priceUa,
        priceEn: data.priceEn,
        fullpriceUa: data.fullpriceUa,
        fullpriceEn: data.fullpriceEn,
        numberOfPlacesUa: data.numberOfPlacesUa,
        numberOfPlacesEn: data.numberOfPlacesEn,
        experienceUa: data.experienceUa,
        experienceEn: data.experienceEn,
        languageLevelUa: data.languageLevelUa,
        languageLevelEn: data.languageLevelEn,
        timeForLearningUa: data.timeForLearningUa,
        timeForLearningEn: data.timeForLearningEn,
        forWhomTitleUa1: data.forWhomTitleUa1,
        forWhomTitleUa2: data.forWhomTitleUa2,
        forWhomDescriptionUa1: data.forWhomDescriptionUa1,
        forWhomDescriptionUa2: data.forWhomDescriptionUa2,
        forWhomTitleEn1: data.forWhomTitleEn1,
        forWhomTitleEn2: data.forWhomTitleEn2,
        forWhomDescriptionEn1: data.forWhomDescriptionEn1,
        forWhomDescriptionEn2: data.forWhomDescriptionEn2,
        themeTitleUa: data.themeTitleUa,
        themeTitleEn: data.themeTitleEn,
        themesUa: [...data.themesUa],
        themesEn: [...data.themesEn],
        faqUa: [...data.faqUa],
        faqEn: [...data.faqEn],
        teacherIds: [...data.teacherIds]
      }
    })
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.log('[CREATE COURSE]', error)
    return NextResponse.json({ message: 'Cannot post' }, { status: 500 })
  }
}
