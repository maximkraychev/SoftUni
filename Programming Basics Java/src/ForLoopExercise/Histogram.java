package ForLoopExercise;

import java.util.Scanner;

public class Histogram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberOfArguments = Integer.parseInt(scanner.nextLine());
        int p1 = 0;
        int p2 = 0;
        int p3 = 0;
        int p4 = 0;
        int p5 = 0;

        for (int i = 1; i <= numberOfArguments; i++) {
            int currentNumber = Integer.parseInt(scanner.nextLine());

            if (currentNumber < 200) {
                p1++;
            } else if (currentNumber < 400) {
                p2++;
            } else if (currentNumber < 600) {
                p3++;
            } else if (currentNumber < 800) {
                p4++;
            } else {
                p5++;
            }
        }

        System.out.printf("%.2f%%\n", ((double) p1 / numberOfArguments) * 100);
        System.out.printf("%.2f%%\n", ((double) p2 / numberOfArguments) * 100);
        System.out.printf("%.2f%%\n", ((double) p3 / numberOfArguments) * 100);
        System.out.printf("%.2f%%\n", ((double) p4 / numberOfArguments) * 100);
        System.out.printf("%.2f%%\n", ((double) p5 / numberOfArguments) * 100);
    }
}
