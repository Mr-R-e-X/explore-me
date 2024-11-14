export function typeWriter({
  text,
  delay,
  setValue,
}: {
  text: string;
  delay: number;
  setValue: (value: string) => void;
}) {
  const textArray = text.split("");
  let result = "";
  textArray.map((char, idx) => {
    setTimeout(() => {
      setValue((result += char));
    }, idx * delay);
  });
}
