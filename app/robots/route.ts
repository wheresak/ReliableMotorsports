export async function GET() {
  const body = ['User-agent: *', 'Allow: /', 'Sitemap: https://reliablemotorsports.ca/sitemap.xml'].join('\n');
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
