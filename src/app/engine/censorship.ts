// I don't want to be banned by Replicate because bad actors are asking
// for some naked anime stuff or whatever
// I also want to avoid a PR scandal due to some bad user generated content

const forbiddenWords = [
  // those keywords have been generated by looking at the logs of the AI Comic Factory
  // those are real requests some users tried to attempt.. :|
  "nazi",
  "hitler",
  "boob",
  "boobs",
  "boobies",
  "nipple",
  "nipples",
  "nude",
  "nudes",
  "naked",
  "pee",
  "peeing",
  "erotic",
  "sexy"
]

// temporary utility to make sure Replicate doesn't ban my account 
// because of what users do in their prompt
export const filterOutBadWords = (sentence: string) => {
  const words = sentence.split(" ")
  return words.filter(word => {
    const lowerCase = word.toLocaleLowerCase()
    return !forbiddenWords.includes(lowerCase)
  }).join(" ")
}