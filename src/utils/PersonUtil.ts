export class PersonUtil {
  private static createInitial(name: string): string {
    if (!name) return "";

    return name.charAt(0).toUpperCase();
  }

  public static getShortName(fullName: string): string {
    if (!fullName) return "";

    const [surname, name, patronymic] = fullName.split(" ");

    if (surname && name && patronymic)
      return `${surname} ${this.createInitial(name)}. ${this.createInitial(
        patronymic
      )}.`;

    return "";
  }

  public static getPassportData(serial: string, number: number): string {
    return `${serial.toUpperCase()} ${number}`;
  }
}
