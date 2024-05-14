import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl leading-9 tracking-tight text-white mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl leading-8 tracking-tight text-white mb-3">{children}</h2>,
    p: ({ children }) => <p className="text-lg mb-4">{children}</p>, // Add margin-bottom for spacing between paragraphs
    img: (props) => (
      <Image
        sizes="100vw"
        className="w-full h-auto"
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}
