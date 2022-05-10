import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { uploadPost } from '../../helpers/createFirebase';
import { Button } from './../UI/Button';
import { useForm } from '../../hooks/useForm';
import { uploadImg } from '../../helpers/fileUpload';
import { File } from '../../interface/interface';

export const Dropzone = () => {
  const { values, valueIsValid, valueChange, reset, inputBluer, hasError } =
    useForm((value) => value.trim() !== '');

  const [selectedImg, setSelectedImg] = useState<File[]>([]);

  console.log('selectedImg', selectedImg);

  const captionRef = useRef<HTMLInputElement>(null!);

  // VALIDAR FORMULARIO Q TODOS LOS CAMPOS ESTEN LLENOS
  let formIsValid = false;

  if (valueIsValid) {
    formIsValid = true;
  }

  const onDrop = useCallback(
    <T extends globalThis.File>(acceptedFiles: T[]) => {
      setSelectedImg(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    []
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handlerClick = async () => {
    const docRef = await uploadPost(captionRef);

    uploadImg(selectedImg, docRef);
  };

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!valueIsValid) {
      console.log('No puede estar vacio este campo');
      return;
    }

    reset();
  };

  const selected_img = selectedImg?.map((file) => {
    <div>
      <Image src={file.preview} alt={file.preview} width={200} height={200} />
    </div>;
  });

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop the files here ...</p>
      </div>

      <form onSubmit={handlerSubmit} autoComplete="off">
        <input
          ref={captionRef}
          type="text"
          placeholder="Enter a caption"
          onChange={valueChange}
          onBlur={inputBluer}
          value={values}
        />
        {hasError && <p>Name must not be empty.</p>}
        <Button disable={!formIsValid} onClick={handlerClick}>
          Post
        </Button>
      </form>

      {selected_img}
    </>
  );
};

// see 17
