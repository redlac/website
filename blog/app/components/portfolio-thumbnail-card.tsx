import * as React from "react"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import redflixImage from '../assets/redflix.png';
import Image from "next/image";

export default function ThumbnailCard() {
  return (
    <Card className="w-[350px] overflow-hidden">
      <div className="relative h-[200px] w-full overflow-hidden">
        <a href="https://redflix-tau.vercel.app">
          <Image
            src={redflixImage}
            alt="Redflix thumbnail"
            className="object-cover w-full h-full"
          />
        </a>
      </div>
      <CardHeader>
        <CardTitle>Redflix</CardTitle>
        <CardDescription className="mt-3">A Netflix-inspired portfolio website</CardDescription>
      </CardHeader>
      <CardContent className="mt-2">
        <p className="text-sm text-gray-500">
          Showcasing my web development skills with a sleek, responsive design inspired by Netflix's user interface.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between mt-6">
        <a
          href="https://github.com/redlac/redflix"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>View Code</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
        <a
          href="https://redflix-tau.vercel.app/"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>Visit Site</span>
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  )
}