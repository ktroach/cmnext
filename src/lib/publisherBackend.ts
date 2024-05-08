'use server'

import {
  generateAuthorFrontmatter,
  generateMDXDate,
  generateMDXFrontmatter,
} from './mdxUtils'
import { writeFileSync, existsSync, readFileSync,   } from 'fs'
import { createDir, fileExists, generateUniqueFilename, verifyPath } from './fileUtils'
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

// TODO: Consider rewriting all of this backend I/O in Rust 
export const createContent = async (
  contentType: string, 
  userName: string | undefined | null,
  subRef: string,
  data: any
) => {
  try {
    if(!userName) {
      console.log('>>> Failed to Create content >>> userName is required')
      return null
    }

    // TODO: Fix Author avatar and url
    const authorMeta = {
      title: userName,
      description: `${userName}`, 
      avatar: '/images/avatar/1940742.png',
      url: 'https://cmnext-8xo7wy5ik-titan-f4a1be16.vercel.app',
    }

    const mdxAuthorContent = generateAuthorFrontmatter(authorMeta)
    const mdxAuthorsPath: string = `./src/content/authors`
    const mdxAuthorFileName: string = `${mdxAuthorsPath}/${userName}.mdx`

    if (!existsSync(mdxAuthorFileName)) {
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

    const contentSlug: string = `/content/${contentType}/${subRef}`
    const mdxContentPath: string = `./src${contentSlug}`

    if (!verifyPath(mdxContentPath)) {
      console.log('creating directory: ', mdxContentPath, '...')
      createDir(mdxContentPath)
    }

    const mdxFileName: string = `${mdxContentPath}/${generatedFilename}.mdx`
    const slug: string = `${generatedFilename}`

    writeFileSync(mdxFileName, mdxFileContent, 'utf8')

    const saveContentResponse = {
      generatedFilename: generatedFilename,
      mdxFileName: mdxFileName,
      slug: slug,
      mdxMeta: MdxMeta,
      mdxDate: mdxDate,
    }

    return saveContentResponse

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

// TODO: Consider rewriting all of this backend I/O in Rust 
export const updateContent = async (
  contentType: string, 
  userName: string | undefined,
  subRef: string,
  data: any
) => {
  try {
    if(!userName) {
      console.log('>>> Failed to Update content >>> userName is required')
      return null
    }

    const contentSlug: string = `/content/${contentType}/${subRef}`
    const mdxContentPath: string = `./src${contentSlug}`

    if (!verifyPath(mdxContentPath)) {
      console.log('Failed to UPDATE content >>> directory does not exist >>> ', mdxContentPath)
      return null
    }

    let mdxMetaData: string | undefined  = data && data?.metaData  ? data.metaData : undefined
    if (!mdxMetaData) {
      console.log('Failed to UPDATE content >>> MDX MetaData is missing or incomplete')
      return null
    }    
    const mdxFileName: string = `${mdxContentPath}${mdxMetaData}`

    if (!fileExists(mdxFileName)) {
      console.log('Failed to UPDATE content >>> MDX File does not exist: ', mdxFileName)
      return null
    }    

    const existingFileContents = readFileSync(mdxFileName, 'utf8')
    const existingFileLines = existingFileContents.split('\n')
    const mdxFrontMatter = existingFileLines.slice(0, 8).join('\n')
    if (!mdxFrontMatter) {
      console.log('Failed to UPDATE content >>> MDX FrontMatter error')
      return null
    }
    
    const mdxFileContent = `${mdxFrontMatter}\n${data.body}`

    writeFileSync(mdxFileName, mdxFileContent, 'utf8')

    const saveContentResponse = {
      mdxFileName: mdxFileName,
      userName: userName, 
      subRef: subRef
    }

    return saveContentResponse
  } catch (ex) {
    console.log('Failed to Save Content >>> ', ex)
    return null
  }
}
