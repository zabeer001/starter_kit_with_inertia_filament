"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Home, Shield, Bed, DoorOpen, Package, Star, Phone, Mail, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return { count, ref }
}

export default function MetalProductsLandingPage() {
  const establishedCounter = useCountUp(2007, 2000)
  const projectsCounter = useCountUp(4260, 2500)
  const partnersCounter = useCountUp(45, 1500)
  const clientsCounter = useCountUp(1000, 2200)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-blue-200/30 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/uploads/logo/logo.jpeg"
                alt="AFRA Enterprise"
                className="h-8 w-8 object-contain"
              />
              <span className="text-2xl font-bold font-serif text-blue-800">AFRA enterprise</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#doors" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Metal Doors
              </a>
              <a href="#lockers" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Security Lockers
              </a>
              <a href="#gates" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Gates & Barriers
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
            </nav>
            <Button className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700">Get Quote</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-blue-500 text-white border-blue-500">
              Premium Metal Solutions Since 1995
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 leading-tight">
              Professional Metal<span className="text-blue-300"> Products & Security</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              From heavy-duty metal doors to secure weapon lockers and industrial gates, we manufacture premium metal
              products for commercial and residential security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-blue-800 hover:bg-blue-50 border border-white">
                View Our Products
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-blue-600">
                Request Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase with Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-800 mb-4">Our Metal Product Range</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              High-quality metal fabrication for security, storage, and industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Metal Security Door"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium">Learn more →</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif mb-2 text-slate-800">Security Doors</h3>
              <p className="text-slate-600">
                Heavy-duty metal doors with reinforced frames and advanced locking systems
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="Weapon Lockers"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium">Learn more →</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif mb-2 text-slate-800">Weapon Lockers</h3>
              <p className="text-slate-600">
                Secure weapon storage with biometric locks and fire-resistant construction
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80"
                  alt="Security Gates"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium">Learn more →</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif mb-2 text-slate-800">Security Gates</h3>
              <p className="text-slate-600">
                Automated and manual gates for perimeter security and access control
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Metal Office Furniture"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium">Learn more →</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif mb-2 text-slate-800">Metal Office Furniture</h3>
              <p className="text-slate-600">
                Durable metal desks, cabinets, and storage solutions for professional environments
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Metal Storage"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium">Learn more →</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif mb-2 text-slate-800">Metal Storage</h3>
              <p className="text-slate-600">
                Wardrobes, cupboards, and storage lockers built for durability and security
              </p>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Metal Beds"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium">Learn more →</span>
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif mb-2 text-slate-800">Metal Bed Frames</h3>
              <p className="text-slate-600">
                Heavy-duty metal bed frames designed for institutional and residential use
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="categories" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-800 mb-4">Product Categories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Specialized metal solutions for every security and storage need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-slate-100 hover:border-blue-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                  <DoorOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-serif text-slate-800">Metal Doors</CardTitle>
                <CardDescription className="text-slate-500">Heavy-duty security doors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Reinforced steel doors</li>
                  <li>• Fire-rated metal doors</li>
                  <li>• Blast-resistant doors</li>
                  <li>• Custom door frames</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-slate-100 hover:border-blue-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-serif text-slate-800">Weapon Lockers</CardTitle>
                <CardDescription className="text-slate-500">Secure firearm storage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Biometric gun safes</li>
                  <li>• Military-grade lockers</li>
                  <li>• Ammunition storage</li>
                  <li>• Custom configurations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-slate-100 hover:border-blue-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-serif text-slate-800">Security Gates</CardTitle>
                <CardDescription className="text-slate-500">Perimeter protection systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Automated entry gates</li>
                  <li>• Sliding security barriers</li>
                  <li>• Access control systems</li>
                  <li>• Anti-ram barriers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-slate-100 hover:border-blue-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-serif text-slate-800">Metal Storage</CardTitle>
                <CardDescription className="text-slate-500">Industrial storage solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Metal wardrobes</li>
                  <li>• Industrial cupboards</li>
                  <li>• Tool storage cabinets</li>
                  <li>• Equipment lockers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-slate-100 hover:border-blue-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                  <Bed className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-serif text-slate-800">Metal Beds</CardTitle>
                <CardDescription className="text-slate-500">Heavy-duty bed frames</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Institutional bed frames</li>
                  <li>• Bunk bed systems</li>
                  <li>• Hospital-grade beds</li>
                  <li>• Custom sizing available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 border-slate-100 hover:border-blue-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-serif text-slate-800">Custom Metal Work</CardTitle>
                <CardDescription className="text-slate-500">Specialized fabrication</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Custom metal furniture</li>
                  <li>• Industrial equipment housing</li>
                  <li>• Specialized enclosures</li>
                  <li>• Prototype development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div ref={establishedCounter.ref}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">{establishedCounter.count}</div>
              <div className="text-blue-100">Company Established</div>
            </div>

            <div ref={projectsCounter.ref}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">
                {projectsCounter.count.toLocaleString()}
              </div>
              <div className="text-blue-100">Projects Done</div>
            </div>

            <div ref={partnersCounter.ref}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">{partnersCounter.count}+</div>
              <div className="text-blue-100">Business Partners</div>
            </div>

            <div ref={clientsCounter.ref}>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">
                {clientsCounter.count.toLocaleString()}+
              </div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-800 mb-4">
              Why Choose AFRA enterprise?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three decades of excellence in metal fabrication and security solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-6 p-6 bg-blue-100 rounded-full w-fit">
                <Star className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold font-serif mb-4 text-slate-800">Superior Durability</h3>
              <p className="text-slate-600">
                Crafted from premium steel and aluminum alloys, our metal products are built to withstand decades of
                heavy use.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 p-6 bg-blue-100 rounded-full w-fit">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold font-serif mb-4 text-slate-800">Security Expertise</h3>
              <p className="text-slate-600">
                Military-grade security solutions with advanced locking mechanisms, reinforced construction, and
                tamper-resistant designs.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 p-6 bg-blue-100 rounded-full w-fit">
                <Building2 className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold font-serif mb-4 text-slate-800">Custom Fabrication</h3>
              <p className="text-slate-600">
                In-house metal fabrication capabilities for custom designs, from concept to powder coating and
                installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-800 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-slate-200">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Exceptional quality office furniture that transformed our workspace. The team was professional and
                  delivery was seamless."
                </p>
                <div className="font-semibold text-slate-800">Sarah Johnson</div>
                <div className="text-sm text-slate-500">CEO, TechCorp</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "The weapon lockers exceeded our security requirements. Built to military standards with excellent
                  customer service."
                </p>
                <div className="font-semibold text-slate-800">Mike Rodriguez</div>
                <div className="text-sm text-slate-500">Security Director</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Beautiful custom wardrobes that perfectly fit our space. The craftsmanship is outstanding and worth
                  every penny."
                </p>
                <div className="font-semibold text-slate-800">Emma Thompson</div>
                <div className="text-sm text-slate-500">Homeowner</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Ready to secure your facility? Contact us for a consultation and custom metal fabrication quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6 text-slate-800">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Phone</div>
                    <div className="text-slate-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Email</div>
                    <div className="text-slate-600">info@metalcraftpro.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Address</div>
                    <div className="text-slate-600">456 Industrial Blvd, Manufacturing District, NY 10002</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="font-serif text-slate-800">Request a Quote</CardTitle>
                <CardDescription className="text-slate-500">
                  Tell us about your metal fabrication project and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">First Name</label>
                      <input className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block text-slate-700">Last Name</label>
                      <input className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-slate-700">Email</label>
                    <input className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="email" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-slate-700">Product Type</label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>Metal Doors</option>
                      <option>Weapon Lockers</option>
                      <option>Security Gates</option>
                      <option>Metal Storage</option>
                      <option>Custom Fabrication</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-slate-700">Message</label>
                    <textarea
                      className="w-full px-3 py-2 border border-slate-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                      placeholder="Tell us about your metal fabrication needs..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold font-serif">AFRA enterprise</span>
              </div>
              <p className="text-slate-400 text-sm">
                Premium metal fabrication and security solutions for over 30 years. Industrial-grade quality you can
                trust.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Metal Doors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Weapon Lockers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security Gates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Metal Work
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Design Consultation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Installation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Maintenance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Warranty
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 AFRA enterprise. All rights reserved. | Crafting premium metal solutions since 1995</p>
          </div>
        </div>
      </footer>
    </div>
  )
}