import { prisma } from '../'

async function main() {
  const userEmail = 'bob.smith@cmnext.io'

  const userAccount = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
    include: {
      accounts: true,
    },
  })

  if (!userAccount) {
    console.error('No accounts exist for user: ', userEmail)
  }  

  const accountId: any = userAccount?.accounts[0]?.id
    ? userAccount.accounts[0].id
    : null

  if (!accountId) {
    console.error('Invalid account Id for user: ', userEmail)
  }

  const bySubsiteName = await prisma.subsite.findUnique({
    where: {
      name: 'Auto Paint Shop', 
      accountId: accountId,
    },
  })

  console.log(bySubsiteName)

  if (bySubsiteName && bySubsiteName.id > 0) {
    console.error('Subsite already exists')
    return; 
  }

  const Subsite = await prisma.subsite.create({
    data: {
      name: 'Auto Paint Shop',
      domainName: 'www.autopaintshop.com',
      logoUrl: 'https://avatars.githubusercontent.com/u/1940742?v=4',
      accountId: accountId,
      siteVisibility: 'public',
      siteLanguage: 'en',
    },
  })

  const bySubsiteId = await prisma.subsite.findUnique({
    where: {
      id: Subsite.id,
    },
  })

  console.log(bySubsiteId)

  const byAccountId = await prisma.account.findUnique({
    where: {
      id: accountId,
    },
    include: {
      subsites: true,
    },
  })

  console.log(byAccountId)
}

main()
