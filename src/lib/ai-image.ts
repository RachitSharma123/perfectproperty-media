// Unsplash CDN — royalty-free, instant loading, no API key required
function unsplash(id: string, w = 1200, h = 800): string {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=85&auto=format&fit=crop`
}

export function aiImage(prompt: string, width = 1200, height = 800, seed?: number): string {
  const key = seed ?? 0
  const map: Record<number, string> = {
    // Hero slides
    42:  unsplash('1613490493576-7fde63acd811', width, height), // luxury home twilight ✓
    77:  unsplash('1560184897-ae75f418493e', width, height),    // aerial neighbourhood ✓
    123: unsplash('1586023492125-27b2c045efd7', width, height), // modern living room ✓
    200: unsplash('1486325212027-8081e485255e', width, height), // commercial building ✓
    // Services
    10:  unsplash('1497366216548-37526070297c', width, height), // office building ✓
    20:  unsplash('1570129477492-45c003edd2be', width, height), // luxury house exterior ✓
    30:  unsplash('1530908295418-a12e326966ba', width, height), // aerial drone view ✓ (was 404)
    40:  unsplash('1555041469-a586c61ea9bc', width, height),    // modern interior ✓
    50:  unsplash('1560250097-0b93528c311a', width, height),    // business portrait ✓
    // About
    60:  unsplash('1507003211169-0a1dd7228f2d', width, height), // photographer working ✓
    61:  unsplash('1519710164239-da123dc03ef4', width, height), // aerial small ✓ (was 404)
    // Portfolio
    101: unsplash('1512917774080-9991f1c4c750', width, height), // luxury home exterior ✓
    102: unsplash('1486325212027-8081e485255e', width, height), // commercial tower ✓
    103: unsplash('1560184897-ae75f418493e', width, height),    // aerial view ✓
    104: unsplash('1586023492125-27b2c045efd7', width, height), // living room ✓
    105: unsplash('1560250097-0b93528c311a', width, height),    // portrait ✓
    106: unsplash('1631049307264-da0ec9d70304', width, height), // bedroom interior ✓
    107: unsplash('1574362848149-11496d93a7c7', width, height), // rooftop pool ✓
    108: unsplash('1504307651254-35680f356dfd', width, height), // industrial building ✓
    109: unsplash('1556909114-44e3e70034e2', width, height),    // pool aerial ✓ (was 404)
    // Blog
    201: unsplash('1558618666-fcd25c85cd64', width, height),   // camera photography ✓ (was 404)
    202: unsplash('1519710164239-da123dc03ef4', width, height), // aerial/drone ✓
    203: unsplash('1555041469-a586c61ea9bc', width, height),   // staged room ✓
    // Avatars
    401: unsplash('1573496359142-b8d87734a5a2', width, height), // woman professional ✓
    402: unsplash('1519085360753-af0119f7cbe7', width, height), // man professional ✓
    403: unsplash('1573497019940-1c28c88b4f3e', width, height), // woman executive ✓
    404: unsplash('1507003211169-0a1dd7228f2d', width, height), // man executive ✓
    405: unsplash('1580489944761-15a19d654956', width, height), // woman smiling ✓
  }
  return map[key] ?? unsplash('1570129477492-45c003edd2be', width, height)
}
