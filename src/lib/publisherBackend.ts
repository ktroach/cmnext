'use server'

import {
  generateAuthorFrontmatter,
  generateMDXDate,
  generateMDXFrontmatter,
} from './mdxUtils'
import { writeFileSync, existsSync } from 'fs'
import { generateUniqueFilename } from './fileUtils'

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

    const postSlug: string = `/content/blog/${subRef}`
    const mdxBlogPath: string = `./src${postSlug}`
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
    console.log("Failed to Save Content >>> ", ex)
    return null
  }
}

export const getContent = () => {
  console.log('getContent...')
}

export const publishContent = () => {
  console.log('publishContent...')
}
