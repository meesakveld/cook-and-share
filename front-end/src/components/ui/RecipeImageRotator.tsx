'use client';
import { useState } from 'react';

// ——— Next.js ———
import Image from 'next/image';

// ——— Types ———
import RecipeType from "@/types/Recipe";
type RecipeImageRotatorProps = {
    recipe: RecipeType;
};

// ——— Assets ———
import arrowLeftCircle from '@/assets/icons/arrow_left_circle.svg';


const RecipeImageRotator = ({ recipe }: RecipeImageRotatorProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSingleImage = recipe.images.length === 1;

  const handleBeforeImage = () => {
    if (!isSingleImage) {
      setCurrentIndex((prevIndex) => (prevIndex - 1) % recipe.images.length);
    }
  }

  const handleNextImage = () => {
    if (!isSingleImage) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % recipe.images.length);
    }
  };

  const getRotationStyle = (index: number) => {
    const relativeIndex = (index - currentIndex + recipe.images.length) % recipe.images.length;
    if (relativeIndex === 0) return '-rotate-[15deg]';
    if (relativeIndex === 1) return 'rotate-0';
    if (relativeIndex === 2) return 'rotate-[15deg]';
    return 'rotate-15';
  };

  const getZIndex = (index: number) => {
    const relativeIndex = (index - currentIndex + recipe.images.length) % recipe.images.length;
    return recipe.images.length - relativeIndex;
  };

  return (
    <div className="sm:-order-1 sm:w-1/2 h-full">
      <div className="flex w-full sm:gap-4">
        <Image
          src={arrowLeftCircle}
          alt="Previous image"
          className={`transition-opacity ${isSingleImage ? 'opacity-0 cursor-default' : 'opacity-100 cursor-pointer'}`}
          onClick={handleBeforeImage}
        />
        <div className="flex-grow w-[70vw] md:w-full aspect-square relative">
          {recipe.images.map((image, i) => (
            <div
              key={image.documentId + '-image'}
              className={`aspect-square absolute w-4/5 p-4 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ${getRotationStyle(i)}`}
              style={{ zIndex: getZIndex(i) }}
            >
              <img
                className="w-full h-full object-cover rounded-[15px]"
                src={image.url}
                alt={recipe.title}
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>
        <Image
          src={arrowLeftCircle}
          alt="Next image"
          className={`rotate-180 transition-opacity ${isSingleImage ? 'opacity-0 cursor-default' : 'opacity-100 cursor-pointer'}`}
          onClick={handleNextImage}
        />
      </div>
    </div>
  );
};

export default RecipeImageRotator;
