import React, { Component } from 'react';
import fs from 'fs';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    this.readBlogs();
  }

  readBlogs = async () => {
    try {
      const folderPath = '/ruta/a/tu/carpeta';
      const fileNames = await readdir(folderPath);

      const blogContents = await Promise.all(
        fileNames.map(async (fileName) => {
          const filePath = `${folderPath}/${fileName}`;
          const content = await readFile(filePath, 'utf-8');
          return { fileName, content };
        })
      );

      this.setState({ blogs: blogContents });
    } catch (error) {
      console.error('Error al leer archivos:', error);
    }
  };

  render() {
    return (
      <div>
        {this.state.blogs.map(({ fileName, content }) => (
          <div key={fileName}>
            <h1>{content.split('\n')[0]}</h1>
            <p>{content.split('\n')[1]}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Blogs;