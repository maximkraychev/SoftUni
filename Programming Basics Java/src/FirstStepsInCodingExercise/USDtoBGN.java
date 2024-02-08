package FirstStepsInCodingExercise;

import java.util.Scanner;

public class USDtoBGN {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);
        double usd = Double.parseDouble(scan.nextLine());
        System.out.println(usd * 1.79549);
    }
}
