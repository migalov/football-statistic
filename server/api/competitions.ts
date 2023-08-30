let competitionsCount = 0;

export default async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(competitionsCount++);
    }, 200)
  });
  return {
    competitionsCount
  }
}