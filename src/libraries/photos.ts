export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const photos: { [id: string]: Photo } = {
  1: {
    src: "https://images.unsplash.com/photo-1682687982502-1529b3b33f85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2N1YmF8ZW58MHx8MHx8fDA%3D",
    alt: "a woman scubas in the ocean with a camera",
    width: 800,
    height: 533,
  },
  2: {
    src: "https://images.unsplash.com/photo-1682686581295-7364cabf5511?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2N1YmF8ZW58MHx8MHx8fDA%3D",
    alt: "a person swimming in a deep blue ocean",
    width: 800,
    height: 534,
  },
  3: {
    src: "https://images.unsplash.com/photo-1682687981630-cefe9cd73072?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2N1YmF8ZW58MHx8MHx8fDA%3D",
    alt: "a woman scubas over a colorful coral reef",
    width: 800,
    height: 533,
  },
};
