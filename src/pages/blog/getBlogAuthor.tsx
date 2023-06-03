import React from "react";

export default function Authors({ className, post }: any) {
  if (post.frontmatter.author.length === 2) {
    const authors = post.frontmatter.author;

    return (
      <div className={"blog-item-intro-footer " + className}>
        By{" "}
        {authors.map((author: string, idx: number) => {
          return (
            <React.Fragment key={idx}>
              <span className="blog-item-author custom-text-green-dark">
                {author}
              </span>
              {idx === 0 && " & "}
            </React.Fragment>
          )
        })}
      </div>
    )
  }

  return (
    <div className={"blog-item-intro-footer " + className}>
      By{" "}
      <span className="blog-item-author custom-text-green-dark">
        {post.frontmatter.author}
      </span>
    </div>
  )
}
