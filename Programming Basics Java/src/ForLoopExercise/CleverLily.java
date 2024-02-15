package ForLoopExercise;

import java.util.Scanner;

public class CleverLily {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int age = Integer.parseInt(scanner.nextLine());
        double priceForWashMachine = Double.parseDouble(scanner.nextLine());
        int priceForToy = Integer.parseInt(scanner.nextLine());

        int increment = 10;
        int savings = 0;

        for (int i = 1; i <= age; i++) {
            if (i % 2 == 0) {
                savings += increment;
                savings--;
                increment += 10;
            } else {
                savings += priceForToy;
            }
        }

        double diff = Math.abs(savings - priceForWashMachine);

        if (savings >= priceForWashMachine) {
            System.out.printf("Yes! %.2f", diff);
        } else {
            System.out.printf("No! %.2f", diff);
        }
    }
}
