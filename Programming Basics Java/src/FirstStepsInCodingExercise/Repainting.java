package FirstStepsInCodingExercise;

import java.util.Scanner;

public class Repainting {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);

        double bags = 0.40;

        int nylon = Integer.parseInt(scan.nextLine());
        int paint = Integer.parseInt(scan.nextLine());
        int thinner = Integer.parseInt(scan.nextLine());
        int hours = Integer.parseInt(scan.nextLine());

        double totalSumForNylon = (nylon + 2) * 1.50;
        double totalSumForPaint = (paint * 1.1) * 14.50;
        double totalSumForThinner = thinner * 5.00;

        double totalSumForMaterials = totalSumForNylon + totalSumForPaint + totalSumForThinner + bags;

        double wageForWorkersPerHour = totalSumForMaterials * 0.30;
        double totalSumForWorkersWage = wageForWorkersPerHour * hours;

        System.out.println(totalSumForMaterials + totalSumForWorkersWage);
    }
}
