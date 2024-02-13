package ConditionalStatementsExercise;

import java.util.Scanner;

public class TimePlus15Minutes {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);

        int hours = Integer.parseInt(scan.nextLine());
        int minutes = Integer.parseInt(scan.nextLine());

        int hourToAdd = 0;

        if (minutes + 15 >= 60) {
            minutes = (minutes + 15) - 60;
            hourToAdd++;
        } else {
            minutes = minutes + 15;
        }

        if (hours + hourToAdd >= 24) {
            hours = (hours + hourToAdd) - 24;
        } else {
            hours += hourToAdd;
        }

        System.out.printf("%d:%02d", hours, minutes);
    }
}
