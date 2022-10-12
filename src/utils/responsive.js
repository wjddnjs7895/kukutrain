/* eslint-disable no-use-before-define */
import { isMobile } from 'react-device-detect';

export const REAL__WIDTH = window.innerWidth;
export const REAL__HEIGHT = screen.availHeight - (window.outerHeight - window.innerHeight);
export const FIGMA__WINDOW__WIDTH = 405;
export const FIGMA__WINDOW__HEIGHT = 720;
export const FIGMA__FRAME__WIDTH = 1280;
export const FIGMA__FRAME__HEIGHT = 720;
export const HEIGHT = REAL__HEIGHT;
export const WIDTH = isMobile ? REAL__WIDTH : getWidthForDesktop();

export function getWidthForDesktop() {
  const result = Math.round((FIGMA__WINDOW__WIDTH / FIGMA__WINDOW__HEIGHT) * REAL__HEIGHT);
  return result;
}

export function getPixelToPixel(size) {
  const scale = WIDTH / FIGMA__WINDOW__WIDTH;

  const newSize = size * scale;
  let result = 0;
  result = Math.round(newSize);
  return `${result.toString()}px`;
}

export const getWidthPercentage = width => {
  const result = Math.round((width / FIGMA__WINDOW__WIDTH) * 100);
  return `${result.toString()}%`;
};

export const getWidthPixel = width => {
  const result = Math.round((width / FIGMA__WINDOW__WIDTH) * WIDTH);
  return `${result.toString()}px`;
};

export const getHeightPercentage = height => {
  const result = Math.round((height / FIGMA__WINDOW__HEIGHT) * 100);
  return `${result.toString()}%`;
};

export const getHeightPixel = height => {
  const result = Math.round((height / FIGMA__WINDOW__HEIGHT) * HEIGHT);
  return `${result.toString()}px`;
};

export const getHeightPixelByWidth = (width, height) => {
  const result = Math.round((height / width) * (width / FIGMA__WINDOW__WIDTH) * WIDTH);
  return `${result.toString()}px`;
};
