export async function GET(req: Request) {
  try {
    const data = [
      {
        url: '/blogs/12341',
        title: 'My Blog 1',
      },
      {
        url: '/blogs/12342',
        title: 'My Blog 2',
      },
      {
        url: '/blogs/12343',
        title: 'My Blog 3',
      },
      {
        url: '/blogs/12344',
        title: 'My Blog 4',
      },
    ]
    return Response.json({ data })
  } catch (error) {
    return Response.json(error)
  }
}
