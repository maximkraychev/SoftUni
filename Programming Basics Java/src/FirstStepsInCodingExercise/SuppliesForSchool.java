package FirstStepsInCodingExercise;

import java.util.Scanner;

public class SuppliesForSchool {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);

        double priceForPens = Integer.parseInt(scan.nextLine()) * 5.80;
        double priceForMarkers = Integer.parseInt(scan.nextLine()) * 7.20;
        double priceForBoardCleaner = Integer.parseInt(scan.nextLine()) * 1.20;
        double discount = Integer.parseInt(scan.nextLine()) / 100.0;

        System.out.println((priceForPens + priceForMarkers + priceForBoardCleaner) * (1 - discount));
    }
}
