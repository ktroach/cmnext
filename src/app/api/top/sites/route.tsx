export async function GET(req: Request) {
  try {
    const data = [
      {
        url: '/subsite/12341',
        name: 'My Site 1',
      },
      {
        url: '/subsite/12342',
        name: 'My Site 2',
      },
      {
        url: '/subsite/12343',
        name: 'My Site 3',
      },
      {
        url: '/subsite/12344',
        name: 'My Site 4',
      },
    ]
    return Response.json({ data })
  } catch (error) {
    return Response.json(error)
  }
}
