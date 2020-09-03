import React, { FunctionComponent } from 'react'

const Layout: FunctionComponent<{ title: string }> = ({ children, title }) => (
  <main>
    <h1>{title}</h1>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ut
        inventore! Excepturi doloremque veritatis labore incidunt, veniam
        tempore ipsa dicta repudiandae aspernatur, nobis qui tenetur eligendi
        error, quam harum cumque?
      </p>
    </div>
    <div>{children}</div>
  </main>
)

export default Layout
