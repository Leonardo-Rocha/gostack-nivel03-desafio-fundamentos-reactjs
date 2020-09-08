const formatDate = (timestamp: Date): string => {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const dateString = new Date(timestamp).toLocaleString('pt-BR', {
    timeZone,
  });

  return dateString.split(' ')[0];
};

export default formatDate;
