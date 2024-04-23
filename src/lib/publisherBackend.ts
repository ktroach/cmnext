'use server'

import {
  generateAuthorFrontmatter,
  generateMDXDate,
  generateMDXFrontmatter,
} from './mdxUtils'
import { writeFileSync, existsSync } from 'fs'
import { createDir, generateUniqueFilename, verifyPath } from './fileUtils'
import { getSubsiteBySignInIdentifierQuery } from './queries'

export const GetSubsiteBySignInIdentifierBackend = async (userId: string, signInIdentifier: string) => {
  if (!userId) {
    console.log('>>> Unauthorized call to Backend Route: [GetSubsiteBySignInIdentifierBackend], Reason: [userId]')
    return null
  }

  if (!signInIdentifier) {
    console.log('>>> Unauthorized call to Backend Route: [GetSubsiteBySignInIdentifierBackend], Reason: [signInIdentifier]')
    return null
  }

  const subSiteResult = await getSubsiteBySignInIdentifierQuery(userId, signInIdentifier)
  console.log('>>> GetSubsiteBySignInIdentifierBackend >>> subSiteResult >>> ', subSiteResult)
  return subSiteResult
}

export const saveContent = (
  userName: string,
  userAvatar: string,
  subRef: string,
  data: any
) => {
  console.log('saveContent...')
  try {
    const authorMeta = {
      title: userName,
      avatar: userAvatar,
      twitter: '',
    }
    const mdxAuthorContent = generateAuthorFrontmatter(authorMeta)
    console.log('>>> mdxAuthorContent: ', mdxAuthorContent)
    const mdxAuthorsPath: string = `./src/content/authors`
    console.log('>>> mdxAuthorsPath: ', mdxAuthorsPath)
    const mdxAuthorFileName: string = `${mdxAuthorsPath}/${userName}.mdx`
    if (!existsSync(mdxAuthorFileName)) {
      console.log('>>> Writing Author File: ', mdxAuthorFileName)
      writeFileSync(mdxAuthorFileName, mdxAuthorContent)
    } else {
      console.log(
        '>>> Author file already exists...skipping write author file: ',
        mdxAuthorFileName
      )
    }

    const mdxDate = generateMDXDate()
    const MdxMeta = {
      title: data.title,
      description: data.description,
      image: data.image,
      date: mdxDate,
    }

    const mdxFrontMatter = generateMDXFrontmatter(MdxMeta, userName)
    const mdxFileContent = `${mdxFrontMatter}\n${data.body}`
    const generatedFilename = generateUniqueFilename()
    console.log('generatedFilename:', generatedFilename)

    const postSlug: string = `/content/blogs/${subRef}`
    const mdxBlogPath: string = `./src${postSlug}`

    if (!verifyPath(mdxBlogPath)) {
      console.log('creating directory: ', mdxBlogPath, '...')
      createDir(mdxBlogPath)
    }

    const mdxFileName: string = `${mdxBlogPath}/${generatedFilename}.mdx`
    const slug: string = `${postSlug}/${generatedFilename}`

    console.log('>>> Writing Post File: ', mdxFileName)
    writeFileSync(mdxFileName, mdxFileContent)

    const response = {
      generatedFilename: generatedFilename,
      mdxFileName: mdxFileName,
      slug: slug,
      mdxMeta: MdxMeta,
      mdxDate: mdxDate,
    }

    return response
  } catch (ex) {
    console.log('Failed to Save Content >>> ', ex)
    return null
  }
}

export const getContent = () => {
  console.log('getContent...')
}

export const publishContent = () => {
  console.log('publishContent...')
}
