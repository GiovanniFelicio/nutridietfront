export class WindowsConfigComponent {
    public static MERCURY = new WindowsConfigComponent(3.303e+23, 2.4397e6);
    public static VENUS = new WindowsConfigComponent(4.869e+24, 6.0518e6);
    private static VALUES: WindowsConfigComponent[] = [];

    private mass: number;
    private radius: number;

    private constructor(mass: number, radius: number) {
        this.mass = mass;
        this.radius = radius;

        WindowsConfigComponent.VALUES.push(this);
    }

    public static values() {
        return WindowsConfigComponent.VALUES;
    }
}