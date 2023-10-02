import Button from '@/components/Button/Button';
import Counter from '@/containers/Counter/Counter';
import useDarkMode from '@/hooks/useDarkMode';

export default function Home() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <main className={`flex min-h-screen items-center justify-around`}>
      <header>
        <Button
          onClick={toggleDarkMode}
          type='SECONDARY'
          label={isDark ? 'To Light Theme' : 'To Dark Theme'}
        />
      </header>

      <Counter name='Counter' />
      <Counter name='Counter With Interval' hasInterval />
    </main>
  );
}
