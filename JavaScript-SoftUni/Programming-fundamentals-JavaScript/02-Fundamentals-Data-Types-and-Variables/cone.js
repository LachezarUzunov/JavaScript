function cone(radius, height) {
  let volume = Math.PI * radius * radius * (height / 3);
  console.log(`volume = ${volume.toFixed(4)}`);
  let surfaceArea =
    Math.PI * radius * (radius + Math.sqrt(height * height + radius * radius));
  console.log(`area = ${surfaceArea.toFixed(4)}`);
}

cone(3, 5);
cone(3.3, 7.8);
