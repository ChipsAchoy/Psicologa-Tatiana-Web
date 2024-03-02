import React, { useEffect, useState } from 'react';
import fs from 'fs';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const TextFilesReader = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const readFiles = async () => {
      try {
        // Ruta de la carpeta que contiene los archivos txt
        const folderPath = 'blogs';
        
        // Lee la lista de archivos en la carpeta
        const fileNames = await readdir(folderPath);

        // Lee cada archivo y obtiene su contenido
        const fileContents = await Promise.all(
          fileNames.map(async (fileName) => {
            const filePath = `${folderPath}/${fileName}`;
            const content = await readFile(filePath, 'utf-8');
            return { fileName, content };
          })
        );

        setFiles(fileContents);
      } catch (error) {
        console.error('Error al leer archivos:', error);
      }
    };

    readFiles();
  }, []);

  return (
    <div>
      {files.map(({ fileName, content }) => (
        <div key={fileName}>
          <h1>{content.split('\n')[0]}</h1>
          <p>{content.split('\n')[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default TextFilesReader;
