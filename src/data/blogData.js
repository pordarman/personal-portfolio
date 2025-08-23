// Bu dosya, blog yazılarımızı tutan bir veritabanı görevi görecek.
// Yeni bir blog eklemek için bu diziye yeni bir obje eklemen yeterli.

export const blogPosts = [
  {
    id: 'test',
    title: 'Test Blog',
    author: 'Ali İhsan Çelik',
    createdAt: '2025-08-23',
    updatedAt: '2025-08-23',
    tags: ['Test'],
    authorImage: null,
    content: `
# Heading 1

Welcome to this **test blog post**. This post demonstrates a variety of Markdown features in English, with extended content for testing purposes.

## Heading 2

Markdown is a lightweight markup language for creating formatted text using a plain-text editor. Below are some examples:

### Heading 3

**Bold text**  
*Italic text*  
~~Strikethrough text~~

> This is a blockquote.  
> It can span multiple lines.

---

### Unordered List

- List item 1
- List item 2
- List item 3
- List item 4
- List item 5

### Ordered List

1. First ordered item
2. Second ordered item
3. Third ordered item
4. Fourth ordered item
5. Fifth ordered item

---

### Nested Lists

- Fruits
  - Apple
  - Banana
    - Cavendish
    - Plantain
  - Orange
- Vegetables
  - Carrot
  - Broccoli

---

### Code Block

\`\`\`javascript
// Example JavaScript code block
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet('Markdown');
\`\`\`

---

### Inline Code

Use \`console.log()\` to print messages to the console.

---

### Table

| Name      | Age | Occupation   |
|-----------|-----|--------------|
| Alice     | 28  | Developer    |
| Bob       | 34  | Designer     |
| Charlie   | 25  | Writer       |
| Diana     | 30  | Manager      |

---

### Links

[Visit Google](https://www.google.com)  
[Markdown Guide](https://www.markdownguide.org)

---

### Images

![Placeholder Image](https://placehold.co/600x400?text=Hello%20World)
![Landscape](https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80)

---

### Horizontal Rule

---

### Task List

- [x] Write a blog post
- [ ] Review content
- [ ] Publish post

---

### Extended Content

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna erat nec erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

#### More Markdown Features

You can also use HTML tags in Markdown:

<div style="color: blue; font-weight: bold;">This is a custom HTML block inside Markdown.</div>

#### Quotes

> "Markdown is not about making the web look pretty. It's about making the web readable."  
> — John Gruber

#### More Code

\`\`\`python
def hello_world():
    print("Hello, Markdown!")
\`\`\`

#### More Lists

- Item A
- Item B
  - Subitem B1
  - Subitem B2
    - Subsubitem B2a

#### More Tables

| Feature      | Supported | Notes              |
|--------------|-----------|--------------------|
| Bold         | Yes       | Use \`**text**\`   |
| Italic       | Yes       | Use \`*text*\`     |
| Images       | Yes       | Use \`![alt](url)\`|
| Tables       | Yes       | Use pipes and dashes|

---

### Final Thoughts

This extended Markdown example covers most features you might need in a blog post. You can add more sections, images, code blocks, and lists as needed.

---

End of the post.
    `
  },
  // ... Add more blog posts here to test pagination.
];