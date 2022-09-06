/* eslint-disable @typescript-eslint/no-unused-vars */
function getName(): void
function getName(name: string): string
function getName(name: number): number
function getName(name?: string | number) {
  if (typeof name === 'string') {
    return name
  } else if (typeof name === 'number') {
    return name
  }
}
