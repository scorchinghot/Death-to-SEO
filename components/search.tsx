'use client'

import { useEffect, useState, useRef } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from "@/prismicio"
import Link from "next/link"

const SearchBar = ({ placeholder = "Search" }: { placeholder?: string }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<any[]>([])
  const [posts, setPosts] = useState<any[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const searchBarRef = useRef(null)
  const searchResultsRef = useRef(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const client = createClient()
      const posts = await client.getAllByType("post")
      setPosts(posts)
    }

    fetchPosts()
  }, [])

  const getTitleText = (post: any) => {
    if (!post.data || !post.data.slices || post.data.slices.length === 0) {
      return "No title available"
    }
    const slice = post.data.slices[0]
    const title = slice.primary?.title
    return title || "No title available"
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)

    if (term && posts.length > 0) {
      const filtered = posts.filter((post: any) => {
        const title = getTitleText(post).toLowerCase()
        return title.includes(term.toLowerCase())
      })
      setFilteredPosts(filtered)
    } else {
      setFilteredPosts([]) 
    }

    setIsOpen(true) 
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (
      searchBarRef.current && !searchBarRef.current.contains(e.target as Node) && 
      searchResultsRef.current && !searchResultsRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false) 
    }
  }

  const handleSearchResultClick = () => {
    setSearchTerm('') 
    setIsOpen(false)  
  }

  const preventClickPropagation = (e: React.MouseEvent) => {
    e.stopPropagation() 
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative w-full" ref={searchBarRef}>
      <Input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder={placeholder}
        className="h-[40px] w-full rounded-full border-0 bg-[#f3f3f4] pl-4 pr-10 text-sm placeholder:text-gray-600 focus-visible:ring-0"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && searchTerm && (
        <div
          ref={searchResultsRef} 
          className="absolute top-full mt-2 w-full bg-white border border-gray-200 shadow-md z-[100] rounded-3xl"
          onClick={preventClickPropagation} 
        >
          {filteredPosts.length > 0 ? (
            <ul>
              {filteredPosts.map((post, index) => {
                const uid = post.uid || post.id 
                return (
                  <li 
                    key={index} 
                    className="px-4 py-2 hover:bg-gray-100 rounded-3xl"
                  >
                    <Link href={`/explore/${uid}`} passHref>
                      <span 
                        className="text-blue-500 hover:text-blue-700"
                        onClick={handleSearchResultClick} 
                      >
                        {getTitleText(post)}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          ) : (
            <div className="px-4 py-2 text-gray-600">No results found</div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBar
