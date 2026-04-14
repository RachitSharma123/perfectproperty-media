// Pollinations.ai — free AI image generation, no API key required
// Generates images on-the-fly from text prompts

export function aiImage(prompt: string, width = 1200, height = 800, seed?: number): string {
  const encodedPrompt = encodeURIComponent(prompt)
  const seedParam = seed !== undefined ? `&seed=${seed}` : ''
  return `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&nologo=true${seedParam}`
}

// Pre-defined images for the site (consistent seeds = consistent images)
export const SITE_IMAGES = {
  // Hero slides
  hero1: aiImage('luxury modern real estate property exterior architecture night twilight photography professional', 1920, 900, 42),
  hero2: aiImage('stunning aerial drone view luxury australian home swimming pool garden real estate photography golden hour', 1920, 900, 77),
  hero3: aiImage('modern apartment interior living room professional real estate photography bright natural light', 1920, 900, 123),
  hero4: aiImage('commercial office building exterior professional architectural photography blue sky australia', 1920, 900, 200),

  // Service cards
  commercial: aiImage('modern commercial office building professional photography architecture urban australia', 800, 600, 10),
  residential: aiImage('beautiful luxury home exterior swimming pool garden real estate photography australia blue sky', 800, 600, 20),
  drone: aiImage('stunning aerial drone photography luxury property suburb australia bird eye view', 800, 600, 30),
  virtual: aiImage('3D virtual staging luxury living room interior design modern furniture rendering', 800, 600, 40),
  portraits: aiImage('professional corporate portrait headshot business person confident smile studio lighting', 800, 600, 50),

  // About section
  about: aiImage('professional real estate photographer working camera tripod luxury property australia', 1200, 700, 60),

  // Portfolio items
  portfolio1: aiImage('luxury beachfront property exterior twilight real estate photography australia', 800, 600, 101),
  portfolio2: aiImage('modern commercial office tower glass facade professional architectural photography', 800, 600, 102),
  portfolio3: aiImage('aerial drone shot suburban homes neighbourhood australia blue sky real estate', 800, 600, 103),
  portfolio4: aiImage('3D rendered luxury living room virtual staging interior design modern', 800, 600, 104),
  portfolio5: aiImage('corporate executive portrait professional headshot business attire confidence', 800, 600, 105),
  portfolio6: aiImage('airbnb holiday rental interior cozy modern bedroom professional photography', 800, 600, 106),
  portfolio7: aiImage('luxury apartment rooftop pool city view twilight real estate photography', 800, 600, 107),
  portfolio8: aiImage('industrial warehouse commercial property exterior professional photography', 800, 600, 108),
  portfolio9: aiImage('outdoor pool area luxury home aerial view real estate photography australia', 800, 600, 109),

  // Blog covers
  blog1: aiImage('real estate photography tips camera equipment professional property shoot', 800, 500, 201),
  blog2: aiImage('drone aerial photography real estate tips flying suburb australia', 800, 500, 202),
  blog3: aiImage('virtual staging before after living room digital furniture 3D rendering', 800, 500, 203),

  // Logos / clients (abstract brand marks)
  client1: aiImage('minimalist modern real estate agency logo white background clean', 200, 100, 301),
  client2: aiImage('luxury property developer brand logo minimalist white background', 200, 100, 302),
  client3: aiImage('construction company logo minimalist white background professional', 200, 100, 303),
  client4: aiImage('real estate brand logo modern minimalist white background', 200, 100, 304),
  client5: aiImage('architecture firm logo minimalist clean white background', 200, 100, 305),

  // Team avatars
  avatar1: aiImage('professional headshot portrait woman real estate industry confident smile', 200, 200, 401),
  avatar2: aiImage('professional headshot portrait man property agent confident smile business', 200, 200, 402),
  avatar3: aiImage('professional headshot portrait woman architect confident smile studio', 200, 200, 403),
}
