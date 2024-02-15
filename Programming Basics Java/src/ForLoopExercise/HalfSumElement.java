package ForLoopExercise;

import java.util.Scanner;

public class HalfSumElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberOfArguments = Integer.parseInt(scanner.nextLine());
        int sum = 0;
        int max = Integer.MIN_VALUE;

        for (int i = 1; i <= numberOfArguments; i++) {
            int currentNumber = Integer.parseInt(scanner.nextLine());

            sum += currentNumber;

            if (currentNumber > max) {
                max = currentNumber;
            }
        }

        int sumWithoutMax = sum - max;

        if (max == sumWithoutMax) {
            System.out.println("Yes");
            System.out.println("Sum = " + max);
        } else {
            int difference = Math.abs(max - sumWithoutMax);
            System.out.println("No");
            System.out.println("Diff = " + difference);
        }
    }
}
