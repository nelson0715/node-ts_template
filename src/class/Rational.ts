export class Rational {
    private numerator: number; 
    private denominator: number; 

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;

        this.normalize();
    }

    public normalize(): Rational {
        const gcd = this.greatestCommonDivisor(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }

    private greatestCommonDivisor(a: number, b: number): number {
        return b === 0 ? Math.abs(a) : this.greatestCommonDivisor(b, a % b);
    }

    public toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    public equals(other: Rational): boolean {
        return this.numerator === other.numerator && this.denominator === other.denominator;
    }

    public isWhole(): boolean {
        return this.denominator === 1;
    }

    public isDecimal(): boolean {
        return this.numerator % this.denominator !== 0;
    }

    public static parseRational(rationalString: string): Rational {
        const parts = rationalString.split("/").map(part => part.trim());   
        const num = Number(parts[0]);
        const denom = Number(parts[1]);    
        return new Rational(num, denom);
    }

    public static _parseRational(numerators: string[], denominators: string[]): Rational {
        const num = numerators.map(Number).reduce((a, b) => a + b);
        const denom = denominators.map(Number).reduce((a, b) => a + b);
        return new Rational(num, denom);
    }
}
