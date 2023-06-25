
import androidx.test.espresso.Espresso;
import androidx.test.espresso.ViewInteraction;
import androidx.test.espresso.matcher.ViewMatchers;
import androidx.test.rule.ActivityTestRule;
import org.junit.Rule;
import org.junit.Test;
import static androidx.test.espresso.action.ViewActions.click;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.isDisplayed;

public class PizzaAppUITest {

    @Rule
    public ActivityTestRule<MainActivity> activityRule = new ActivityTestRule <> (MainActivity.class);

    @Test
    public void testBotaoIniciar() {
        ViewInteraction iniciarButton = Espresso.onView(ViewMatchers.withId(R.id.iniciarButton));
        iniciarButton.check(matches(isDisplayed()));
        iniciarButton.perform(click());

        ViewInteraction selecaoSaboresScreen = Espresso.onView(ViewMatchers.withId(R.id.selecaoSaboresScreen));
        selecaoSaboresScreen.check(matches(isDisplayed()));
    }
}
import androidx.test.espresso.Espresso;
import androidx.test.espresso.ViewInteraction;
import androidx.test.espresso.matcher.ViewMatchers;
import androidx.test.rule.ActivityTestRule;
import org.junit.Rule;
import org.junit.Test;
import static androidx.test.espresso.action.ViewActions.click;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.isDisplayed;

public class PizzaAppUITest {

    @Rule
    public ActivityTestRule<MainActivity> activityRule = new ActivityTestRule <> (MainActivity.class);

    @Test
    public void testSelecaoSabores() {
        // Lógica para selecionar sabores
        // Verificar se os sabores foram adicionados corretamente à lista de sabores escolhidos
    }
}
import androidx.test.espresso.Espresso;
import androidx.test.espresso.ViewInteraction;
import androidx.test.espresso.matcher.ViewMatchers;
import androidx.test.rule.ActivityTestRule;
import org.junit.Rule;
import org.junit.Test;
import static androidx.test.espresso.action.ViewActions.click;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.isDisplayed;

public class PizzaAppUITest {

    @Rule
    public ActivityTestRule<MainActivity> activityRule = new ActivityTestRule <> (MainActivity.class);

    @Test
    public void testSelecaoComplemento() {
        // Lógica para selecionar um complemento
        // Verificar se o complemento foi adicionado corretamente ao pedido
    }
} import androidx.test.espresso.Espresso;
import androidx.test.espresso.ViewInteraction;
import androidx.test.espresso.matcher.ViewMatchers;
import androidx.test.rule.ActivityTestRule;
import org.junit.Rule;
import org.junit.Test;
import static androidx.test.espresso.action.ViewActions.click;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.isDisplayed;

public class PizzaAppUITest {

    @Rule
    public ActivityTestRule<MainActivity> activityRule = new ActivityTestRule <> (MainActivity.class);

    @Test
    public void testBotaoAdicionarSacola()