package FirstStepsInCodingExercise;

import java.util.Scanner;

public class FoodDelivery {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);
        double chickenFood = Integer.parseInt(scan.nextLine()) * 10.35;
        double fishFood = Integer.parseInt(scan.nextLine()) * 12.40;
        double vegetarianFood = Integer.parseInt(scan.nextLine()) * 8.15;
        double delivery = 2.50;

        double sweet = (chickenFood + fishFood + vegetarianFood) * 0.20;

        System.out.println(chickenFood + fishFood + vegetarianFood + sweet + delivery);
    }
}
