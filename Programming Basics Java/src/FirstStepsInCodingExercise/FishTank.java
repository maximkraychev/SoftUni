package FirstStepsInCodingExercise;

import java.util.Scanner;

public class FishTank {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);

        int longSide = Integer.parseInt(scan.nextLine());
        int shortSide = Integer.parseInt(scan.nextLine());
        int height = Integer.parseInt(scan.nextLine());
        double occupiedPartPercentage = Double.parseDouble(scan.nextLine()) / 100;

        double fullVolume = ((double) longSide * shortSide * height) / 1000;
        double volumeTakenByWater = fullVolume * (1 - occupiedPartPercentage);

        System.out.println(volumeTakenByWater);
    }
}
