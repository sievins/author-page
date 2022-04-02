import path from "path-browserify";
import coverMetaData from "../assets/images/covers/meta.json";

const removeHash = (fileName) => fileName.replace(/\..+\./, ".");

export const getHeight = ({ width, src }) => {
  const coverName = removeHash(path.basename(src));

  const { naturalHeight, naturalWidth } = coverMetaData.find(
    (cover) => cover.coverName === coverName
  );

  return (naturalHeight * width) / naturalWidth;
};
