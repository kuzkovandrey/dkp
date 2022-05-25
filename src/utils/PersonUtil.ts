export class PersonUtil {
  private static createInitial(name: string): string {
    if (!name) return "";

    return name.charAt(0).toUpperCase();
  }

  public static getShortName(fullName: string): string {
    const [surname, name, patronymic] = fullName.split(" ");

    return `${surname} ${this.createInitial(name)}. ${this.createInitial(
      patronymic
    )}.`;
  }

  public static getPassportData(serial: string, number: number): string {
    return `${serial.toUpperCase()} ${number}`;
  }
}
