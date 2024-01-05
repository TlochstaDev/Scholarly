# Creating an Article
When creating an article on tlochsta edu you need to first, create or login with a GitHub account. 
Then, head over to [this repository](https://github.com/TlochstaDev/edu.tlochsta.world) and make and fork it.
After you do that, make a new Markdown file in the **/articles directory**.
When naming your file the your-file-name.md will be displayed as https://edu.tlochsta.world/articles/your-file-name so choose a web appropriate name.
Names should not include special characters (ex. ?, !, or #) and no capitals. It's okay if you have numbers, but try to limit them to only letters.
After you write your .md file, go to the **/data/articles.json** file and add a new item.
*(please contact a friend or administrator if you do not know how to write JSON!)*
The item should consist of the following data (customise for your needs)
```
{
  "title": "Your Articles Title Put Here",
  "image": "https://example.com/your-image-url",
  "id": "put-your-file-name-WITHOUT-THE-MD! (ex: how-to-use-html)"
  "author": "your name/org"
}
```
Then commit the changes and save!
