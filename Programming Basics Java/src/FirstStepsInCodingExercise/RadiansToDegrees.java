package FirstStepsInCodingExercise;

import java.util.Scanner;

public class RadiansToDegrees {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);
        double radians = Double.parseDouble(scan.nextLine());
        System.out.println((radians * 180) / Math.PI);
    }
}
