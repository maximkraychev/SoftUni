package ConditionalStatementsExercise;

import java.util.Scanner;

public class BonusScore {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);

        int number = Integer.parseInt(scan.nextLine());
        double bonus = 0;

        if (number <= 100) {
            bonus = 5;
        } else if (number > 1000) {
            bonus = number * 0.10;
        } else {
            bonus = number * 0.20;
        }

        if (number % 2 == 0) {
            bonus += 1;
        } else if (number % 10 == 5) {
            bonus += 2;
        }

        System.out.println(bonus);
        System.out.println(number + bonus);
    }
}
